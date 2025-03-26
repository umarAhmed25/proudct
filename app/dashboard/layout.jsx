export default  function DashboardLayout({ children }) {
  
return(
  <>
      <div className='sm:ml-60 bg-[#F9F9F9]'>
        <div className='px-4 sm:px-8 py-4 bg-white'>
          {children}
        </div>
      </div>
  </>
  ) 
}

