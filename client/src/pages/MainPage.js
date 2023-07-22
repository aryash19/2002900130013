import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [TrainData, SetTrainData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/train/getAllTrains")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetTrainData(data?.data);
      });
  }, []);


    return (
        <div className='h-full bg-slate-400'>
            <div className='text-center text-white font-extrabold text-3xl p-3 rounded-md'>
                <h1> Train Services </h1>
                <h2> Aryash 2002900130013 ABES INSTITUTE OF TECHNOLOGY</h2>
            </div>





            <div>
                <div class="max-w-4xl m-auto mt-6">
                    <table class="w-full table-collapse">
                        <thead>
                            <tr>
                                <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                                    Train Name
                                </th>

                                <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                                    Train Number
                                </th>

                                <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200" >
                                    Departure Time
                                </th>

                                <th class="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200 text-center" >
                                    Seats Available
                                </th>

                                <th class="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200" >
                                    More Details
                                </th>
                            </tr>
                        </thead>


                        {TrainData.map((data, index) => (
                            <tbody data-index={index} class="align-baseline">
                                <tr class="group cursor-pointer hover:bg-gray-100">

                                    <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap" >
                                        {data.trainName}
                                    </td>

                                    <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap" >
                                        {data.trainNumber}
                                    </td>

                                    <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                                        {data.departureTime.Hours}:{data.departureTime.Minutes}
                                    </td>

                                    <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap " >
                                        {data.seatsAvailable.sleeper + data.seatsAvailable.AC}
                                    </td>

                                    <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap text-sm group-hover:visible" >
                                            <button class='bg-red-300 p-3 rounded-lg'> Get Details </button>
                                    </td>
                                </tr>

                            </tbody>
                        ))}






                    </table>
                </div>
            </div>
        </div>
    )
}

export default MainPage