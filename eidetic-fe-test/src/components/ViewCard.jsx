import React from 'react'
import { useState, useEffect } from 'react'

const ViewCard = () => {
    const [starts, setStarts] = useState([])

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
            const data = await fetch('https://skeleton-a70q.onrender.com/api/start/');
            const json = await data.json();
            setStarts(json);
            console.log(starts);
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, []);

    return (
        <>
            <div className="border w-[500px]rounded-xl">
                <div className="min-h-screen p-10">
                    {starts.map((start, index) => {
                        return (
                            <div class="card rounded-[12px] m-10 text-xl shadow-lg hover:shadow-2xl p-5 opacity-70 hover:opacity-100">
                                <a href="#">
                                    <div class="w-full h-20 bg-sky-50 rounded mb-3 flex items-center justify-center">
                                        <h1 className="text-2xl font-medium text-indigo-900">
                                            {start.title}
                                        </h1>
                                    </div>
                                    <button class="h-8 flex justify-center items-center bg-indigo-400 rounded w-full mb-2">
                                        <h3 className="text-sm text-white ">Finish the Conversation</h3>
                                    </button>
                                    <div class="h-8 flex items-center justify-center bg-gray-50 rounded w-1/4">
                                        <h3 className="text-sm">Posted 3 hours ago</h3>
                                    </div>
                                </a>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ViewCard
