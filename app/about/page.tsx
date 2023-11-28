import { AboutUs } from '@/components/about/AboutUs';
import Accivement from '@/components/about/Accivement';
import FirstAt from '@/components/about/FirstAt';
import Statistic from '@/components/about/Statistic';

const page = () => {
    return (
        <div>
            <FirstAt>  </FirstAt>

            <Statistic></Statistic>

            <AboutUs></AboutUs>
            <Accivement></Accivement>
        </div>
    );
};

export default page;