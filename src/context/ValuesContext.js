import React from 'react';

const ValuesContext = React.createContext([])

export const ValuesProvider = ValuesContext.Provider;
export const ValuesConsumer = ValuesContext.Consumer;
export default ValuesContext;