require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('643c3d9f45bedd259808a0fe').then((task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// })).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('643c31e29af1632143d15714').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})