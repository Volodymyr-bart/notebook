import styled from 'styled-components';
// import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

export const PersonStyled = styled(Paper)(() => ({
  display: 'space-betwen',
  minWidth: '45%',
  width: 'fit-content',
  textAlign: 'center',
  gap: '10px',
  padding: '10px',
  backgroundColor: '#7fb8f2',
  color: '#fff',
  marginRight: 'auto',
  marginLeft: 'auto',
  // alignSelf: 'center',
  // justifySelf: 'center',
}));
export const DeleteButton = styled(DeleteIcon)(() => ({
  cursor: 'pointer',
}));
// export const PersonStyled = styled.li`
//   display: flex;
//   gap: 10px;
// `;

// export const DeleteButton = styled.button`
//   width: fit-content;
//   background-color: #bb1414;
//   cursor: pointer;
// `;

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
