import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = ({ linksArray }) => {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <Drawer open={open} onClose={() => setOpen(false)} >

                <List>
                    {linksArray.map((link, index) => (
                        <ListItemButton key={index} divider
                            sx={{px:15}}
                        >
                            <ListItemIcon>
                                <ListItemText
                                >
                                    {link}

                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            <IconButton

                sx={{
                    mx: 'auto',
                    // width: 200  

                }}

                onClick={() => setOpen(!open)}>
                <MenuRoundedIcon></MenuRoundedIcon>
            </IconButton>
        </div >
    )
}

export default DrawerComp