
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { fetchContent } from "../../store/reducer";
import './SearchBox.css';

function SearchBox() {
    const [urlValue, setSearchLine] = useState('');
    let [request,setRequest]=useState(false);
    let dispatch = useDispatch()
    useEffect(()=>{
        if(request)
        {
            dispatch(fetchContent(`s=${urlValue}`));
            setRequest(!request);
        }
    },[request]);

    return (
        <div className="search-box">
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={urlValue}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Поиск фильма"
                        onChange={(e) =>setSearchLine(e.target.value)}
                    />
                </label>
                <button
                    className="search-box__form-submit"
                    onClick={() => {if(urlValue.length!==0)
                        setRequest(!request);}}
                >
                    Искать
                </button>
        </div>
    );
}

export default SearchBox;