import React, {useState, useEffect} from 'react';
import TemplateItem from './TemplateItem';
export const Templates = () => {
    const [Templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        getTemplates();
        //eslint-disable-next-line
    }, []);

    const getTemplates = async () => {
        setLoading(true);
        const res = await fetch('/Templates');
        const data = await res.json();

        setTemplates(data);
        setLoading(false);
    }
    
    if(loading){
        return <h4>loading</h4>
    }
    return (
        <ul>
            <li>
                <h4>Templates</h4>
            </li>
            {!loading && Templates.length === 0 ? (<p>no data</p>) : (
                Templates.map(template => <TemplateItem template={template} key={template.id}/>)
            )  
            }
        </ul>
    )
} 
export default Templates 