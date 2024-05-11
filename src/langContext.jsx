import React from 'react'
import { createContext, useState } from 'react';

const LangContext = createContext(true);

const  LangProvider  =  ({ children })  =>  {
    const [language, setlanguage] = useState(true);

    const toggleFunction = () => {
          setlanguage(!language)
    }
return  (
    <LangContext.Provider value={{ language, toggleFunction }}>
        {children}
    </LangContext.Provider>
    );
};

export  {  LangContext,  LangProvider  };