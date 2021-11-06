import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function ChecklistItem({primary, secondary}) {
    const [isChecked, setChecked] = useState(false);

    function handleToggleCheckboxItem() {
        setChecked(!isChecked);
    }

    return (
        <ListItem button onClick={handleToggleCheckboxItem}>
            <ListItemAvatar>
                {isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
            <KeyboardArrowRightIcon />
        </ListItem>

    );
}

export default ChecklistItem;