import React from 'react'

const Form = () => {
  return (
    <>
        <div className='max-w-screen-md container mx-auto md:px-20 px-4'>
            <h1 className='text-4xl font-thin text-center mt-12 md:my-20'>
                Form Validation
            </h1>
            <form>
                <div className='border-b border-sky-300 pb-12 mb-12'>
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
                            <div class="mt-2">
                            <input
                                required
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                                className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="age" class="block text-sm/6 font-medium text-gray-900">Age</label>
                            <div class="mt-2">
                            <input
                                required
                                type="number"
                                id="age"
                                placeholder="Enter your age"
                                className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email Address</label>
                            <div class="mt-2">
                            <input
                                required
                                type="email"
                                id="email"
                                placeholder="Enter your Valid Email Address"
                                className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="phone_number" class="block text-sm/6 font-medium text-gray-900">Phone Number</label>
                            <div class="mt-2">
                            <input
                                required
                                type="number"
                                id="phone_num"
                                placeholder="Enter 10 digit Valid mobile number"
                                className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="Gender" class="block text-sm/6 font-medium text-gray-900">Gender :</label>
                            <div class="flex mt-2 py-3">
                                <input type="radio" name="gender" id="male" className="radio radio-info mx-2" defaultChecked />
                                <span className='text-sm/6'>Male</span>
                                <input type="radio" name="gender" id="female" className="radio radio-info mx-2"/>
                                <span className='text-sm/6'>Female</span>
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="" class="block text-sm/6 font-medium text-gray-900">Block</label>
                            <div class="mt-2">
                            <select className="select select-info w-full max-w-xs">
                                <option disabled selected>--Select--</option>
                                <option value="one">One</option>
                                <option value="two">Tow</option>
                                <option value="three">Three</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                        <div class="flex">
                            <label for="selectdocument" class="block text-sm/6 mx-2 font-medium text-gray-900">Select Document:</label>
                                <input type="checkbox" id="a" className="checkbox checkbox-info" />
                                <span className='text-sm/6 mx-2'>A</span>
                                <input type="checkbox" id="b" className="checkbox checkbox-info" />
                                <span className='text-sm/6 mx-2'>B</span>
                                <input type="checkbox" id="c" className="checkbox checkbox-info" />
                                <span className='text-sm/6 mx-2'>C</span>
                        </div>
                    </div>
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4">
                        <label for="file" class="block text-sm/6 font-medium text-gray-900">Upload Document</label>
                        <input required type="file" title="Upload your Valid Document" id="file" className="file-input file-input-bordered file-input-info w-full" />
                    </div>
                    <div class="mt-10 text-center">
                        <button className="btn btn-outline btn-info">Submit</button>
                    </div>
            </div>    
            </form>
        </div>
    </>
  )
}

export default Form