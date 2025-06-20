import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryCard from '../Components/Home/CategoryCard';
import logo from '../img/logo.png';
import CONFIG from '../utils/Config';

export default function Home() {
    const [bg, setBg] = useState('');

    const getBg = async () => {
        try {
            const response = await axios.get(`/background`);
            setBg(response?.data[0]?.image);
        } catch (error) {
            console.error('Failed to fetch background:', error);
        }
    };

    useEffect(() => {
        getBg();
    }, [])

    const backgroundStyle = bg ? { backgroundImage: `url(${CONFIG.API_URL + bg})` } : {};

    return (
        <div className="pb-[50px] relative min-h-[1000px] h-[100%] bg-cover bg-center bg-no-repeat" style={backgroundStyle}>
            <div className='absolute  h-[100%] z-10 inset-0 bg-[#0000008e]'>

            </div>
            <div className="Header relative z-20 flex items-center justify-center bg-white p-[20px] rounded-b-[30px]">
                <img className='sm:w-[200px] w-[100px]' src={logo} alt="Logo" />
            </div>
            <div className='Container relative z-20'>
                <CategoryCard />
            </div>
        </div>
    );
}
