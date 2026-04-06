/**
 * 1. Create a context
 *      export const DataContext = createContext()
 * 
 * 2. Wrap the children components with Context Provider
 *      const data = It can be string, array object etc.
 *      <DataContext.Provider value={data}>
 *          <ChildrenComponent />
 *      </DataContext.Provider>
 * 
 * 3. Access context value
 *      import {DataContext} from '../path'
 *      const contextData = useContext(DataContext)
 */