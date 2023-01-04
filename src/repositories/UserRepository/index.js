import base from "@/repositories/BaseRepository";

const getUsers = (params = null) => base.get(`/`, {params: params});

export default {
  getUsers,
}
