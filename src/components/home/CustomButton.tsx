import { Link } from "react-router-dom";
import { CustomButtonType } from "../../types";

const CustomButton = ({ text, route, background, className, onClick }: CustomButtonType) => {
    return (
        <Link
            to={route}
            onClick={onClick}
            className={`${className} mx-auto md:mx-0 block w-fit text-sm text-white font-semibold transition-all shadow-sm px-8 py-4 rounded-[30px] mt-6`}
            style={{ background }}
        >
            {text}
        </Link>
    );
};

export default CustomButton;
