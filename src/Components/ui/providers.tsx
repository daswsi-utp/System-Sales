'use Client'

import { ThemeProvider } from "next-themes"

export const providers = ({children}:{children:React.ReactNode}) => {
  return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
  
}
