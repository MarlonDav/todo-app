import{
    createContext,
    useContext,
    useState
} from 'react'

const context = createContext()
const Provider = context.Provider

const getItems = async () => {
    return fetch('url')
}   


const ContextGlobalProvider = ({ children }) => {
    const [keywordContext, setKeywordContext] = useState('')
  
    return(
        <Provider
            value ={{
                getItems,
                keywordContext,
                setKeywordContext
            }}
            >
            {children}
        </Provider>
    )
}
function useGlobalContext(){
    return useContext(context)
}
export { ContextGlobalProvider as default, useGlobalContext}