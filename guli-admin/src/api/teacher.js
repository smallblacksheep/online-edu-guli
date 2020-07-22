import request from '@/utils/request'
export default {
  getTeacherList() {
    return request({
      url: '/admin/edu/teacher/list',
      method: 'get'
    })
  },
  pageList(currentPage, pageSize, teacherQuery) {
    return request({
      url: `/admin/edu/teacher/list-condition/${currentPage}/${pageSize}`,
      method: 'get',
      params: teacherQuery
    })
  },
  addTeacher() {
    return request({
      url: '/admin/edu/teacher/create',
      method: 'post'
    })
  },
  deleteById(id) {
    return request({
      url: `/admin/edu/teacher/delete/${id}`,
      method: 'delete'
    })
  }

}
