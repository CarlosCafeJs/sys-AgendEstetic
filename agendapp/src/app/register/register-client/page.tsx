'use client'
import { TextField, Box, TextFieldProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, } from 'react';
import { useMask } from '@react-input/mask';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const RegisterClient = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [phone, setPhone] = useState('');
  const telInputMask = useMask({ mask: '(__) _____-____', replacement: { _: /\d/ } });
  const cpfInputMaks = useMask({ mask: '___.___.___-__', replacement: { _: /\d/ } });
  const cepInputMaks = useMask({ mask: '_____-___', replacement: { _: /\d/ } });
  const emailInputMask = useMask({ mask: '', replacement: '_' });
  const handleChange = (event: any) => {
    setPhone(event.target.value);
  };

  return (
    <Box sx={{ mx: 'auto', my: 0, maxWidth: 1200 }}>
      <Box sx={{ paddingBottom: 4, paddingTop: 15, gap: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <TextField required id="nome-register" label="Nome" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker

            label="Data de Nascimento"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            // renderInput={(params) => <TextField {...params} />}
            slotProps={{
              textField: {
                required: true,
              },
            }}
          />
        </LocalizationProvider>
        <TextField required id="tel-register" label="Telefone" variant="outlined" inputRef={telInputMask} />
        <TextField required id="email-register" label="Email" variant="outlined" type="email" />
        <TextField required id="rg-register" label="RG" variant="outlined" />
        <TextField required id="cpf-register" label="CPF" variant="outlined" inputRef={cpfInputMaks} />
        <TextField required id="idade-register" label="Idade" variant="outlined" />

        <TextField id="profissao-register" label="Profissão" variant="outlined" />
        <TextField id="estadocivil-register" label="Estado Civil" variant="outlined" />

      </Box>

      <Box sx={{ maxWidth: 800, gap: 2, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <TextField required sx={{ maxWidth: 180 }} id="cep-register" label="CEP" variant="outlined" inputRef={cepInputMaks} />
        <TextField required sx={{ gridColumn: '2 / 4' }} id="endereco-register" label="Endereço" variant="outlined" />
        <TextField required id="bairro-register" label="Bairro" variant="outlined" />
        <TextField required sx={{ maxWidth: 180 }} id="cidade-register" label="Cidade" variant="outlined" />
        <TextField required sx={{ maxWidth: 100 }} id="uf-register" label="UF" variant="outlined" />
      </Box>

    </Box >
  )
}

export default RegisterClient;