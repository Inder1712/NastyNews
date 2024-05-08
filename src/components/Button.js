


export default function Button(props) {

    return (
    <div className='h-[5%] flex w-screen lg:space-x-[76%] space-x-[50%]  items-center '>
        <button onClick={props.prevClick} className='h-[100%] w-[20%] ml-[5%] lg:w-[6%] text-white rounded-md bg-blue-500 lg:ml-[6%] flex justify-center items-center'>Previous</button>
        <button onClick={props.nextClick}  className='h-[100%] w-[20%] lg:sw-[6%] lg:w-[6%] text-white rounded-md bg-blue-500 flex justify-center items-center'>Next</button>

    </div>
  )
}
