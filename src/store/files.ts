import { create } from "zustand"

import api, { SEARCH_PATH } from "src/utils/api"

export interface IFile {
  id: number
  title: string
  originalName: string
  dateAdded: string
  dateModified: string
  trancription: string
}

export interface IVideo extends IFile {
  captions: string
  url: string
}

interface Data {
  files: IFile[]
  videos: IVideo[]
}

type FilesStore = {
  data: Data
  isLoading: boolean
  searchValue: string
  setSearchValue: any
  searchFiles: any
  reset: any
}

const initialState: any = {
  data: {},
  isLoading: false,
  searchValue: "",
}

const useFilesStore = create<FilesStore>((set) => ({
  ...initialState,
  searchFiles: async (query?: string) => {
    set(() => ({ isLoading: true, searchValue: query }))
    try {
      const { data } = await api.get(
        `${SEARCH_PATH}?query=${query ? query : ""}`
      )
      console.log(data)
      set((state) => ({ data: (state.data = data) }))
    } catch (err) {
      console.error(err)
    } finally {
      set(() => ({ isLoading: false }))
    }
  },
  setSearchValue: (val: string) => {
    set(() => ({ searchValue: val }))
  },
  reset: () => {
    set(initialState)
  },
}))

export default useFilesStore
