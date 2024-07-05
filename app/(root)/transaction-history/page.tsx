 
import React from 'react'

const TransactionHistory =   ( ) => {
   
  return (
    <div className="transactions">
      <div className="transactions-header">
        
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white"></h2>
            <p className="text-14 text-blue-25">
             </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● 
            </p>
          </div>
          
          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold"></p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
           
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory