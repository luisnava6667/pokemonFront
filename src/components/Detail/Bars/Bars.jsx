
export const Bars = ({ numero, title, value = numero }) => {
  return (
    <div className=' mb-10 w-100 '>
      <div className=' mb-5 bold flex px-15 space-between'>
        <p>{title}</p>
        <p>{value}</p>
      </div>
      <div className=' w-100 h-10 gray br-5'>
        <div
          className='h-10 transition-ease blue overflow-hidden br-5'
          style={{ width: `${numero}%` }}></div>
      </div>
    </div>
  )
}
