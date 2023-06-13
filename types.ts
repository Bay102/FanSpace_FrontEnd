export type NavigationProviderTypes = {
   showSideNav: boolean,
   toggleSideNav: () => void,
   showBottomNav: boolean,
   setShowBottomNav: React.Dispatch<React.SetStateAction<boolean>>,
   activePage: string ,
   setActivePage: React.Dispatch<React.SetStateAction<string>>
}

export type NavItem = {
   id: number,
   title: JSX.Element,
   onPress: () => void
}

export type TeamPageProps = {
   teamName: string,
}