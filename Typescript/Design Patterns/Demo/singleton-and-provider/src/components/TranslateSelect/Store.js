export const useStore = (() => {
    let storeInstance;
    const createStoreInstance = () => {
        let lang = "VN";
        const getLang = () => {
            return lang;
        }
        const setLang = (newLang) => {
            lang = newLang;
            return lang;
        }
        return {getLang, setLang};
    }
    return {
        void: () => {
            if (!storeInstance) {
                storeInstance = createStoreInstance()
            }
            return storeInstance
        },
    } 
})