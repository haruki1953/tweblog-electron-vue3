import {
  useImageStore,
  usePostStore,
  useStatesStore,
  useAdminStore,
  useProfileStore,
  useTaskStore,
  useLogStore,
  useForwardStore
} from '@/stores'

export const dataFirstLoadService = async () => {
  const postStore = usePostStore()
  const imageStore = useImageStore()
  const profileStore = useProfileStore()
  const adminStore = useAdminStore()
  const taskStore = useTaskStore()
  const forwardStore = useForwardStore()
  const logStore = useLogStore()

  const statesStore = useStatesStore()
  statesStore.setFirstDataLoading(true)
  await Promise.all([
    postStore.reGetPosts(),
    imageStore.reGetImages(),
    profileStore.loadAll(),
    adminStore.loadInfo(),
    taskStore.pollLoad(),
    forwardStore.loadFirst(),
    logStore.reGetData()
  ])
  statesStore.setFirstDataLoading(false)
}
