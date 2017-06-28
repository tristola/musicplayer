import { put, call } from 'redux-saga/effects'
import SonglistActions from '../Redux/SonglistRedux'
import RNFS from 'react-native-fs'
import MediaMeta from 'react-native-media-meta'

// config
const MEDIA_DIR = '/mnt/sdcard/Music'
// functions
const getFolders = (dir) => {
  return RNFS.readDir(dir).then(
    result => result
      .filter(item => item.isDirectory())
      .map(item => item.path)
  )
}

const getFiles = (dir) => {
  return RNFS.readDir(dir).then(
    result => result
      .filter(item => !item.isDirectory())
      .map(item => item.path)
  )
}

async function getFoldersRecursive (dir, directories) {
  const subfolders = await getFolders(dir)
  return Promise.all(subfolders.map(folder => {
    directories.push(folder)
    return getFoldersRecursive(folder, directories)
  }))
}

async function getAllFiles (allDirectories, allFiles) {
  for (let i = 0; i < allDirectories.length; i++) {
    const files = await getFiles(allDirectories[i])
    files.map(file => allFiles.push(file))
  }
}

async function addMetadata (allFiles, resultMetadata) {
  for (let i = 0; i < allFiles.length; i++) {
    const file = allFiles[i]
    const metadata = await MediaMeta.get(file)
    if (metadata) {
      resultMetadata.push({file, metadata})
    }
  }
}

export function * scanFiles (action) {
  const all = []
  const allfiles = []
  const allMeta = []
  try {
    yield call(getFoldersRecursive, MEDIA_DIR, all)
    yield call(getAllFiles, all, allfiles)
    yield call(addMetadata, allfiles, allMeta)
    console.tron.display({
      name: 'GOT FILES',
      preview: 'folders:' + all.length + ' files: ' + allfiles.length,
      value: allMeta
    })
    if (allfiles) {
      yield put(SonglistActions.songlistAdd(allMeta))
    }
  } catch (error) {
    yield put(SonglistActions.songlistAdd([]))

    console.tron.display({
      name: 'Failed to read data',
      preview: `folder:${MEDIA_DIR}`,
      value: allMeta
    })
  }
}
