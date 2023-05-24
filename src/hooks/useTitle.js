import { useEffect } from "react";

const useTitle = title => {
    useEffect( () => {
        document.title = `Chadmama Toys | ${title}`;
    }, [title]);
}

export default useTitle;