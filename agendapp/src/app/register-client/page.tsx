'use client'
import { TextField, Box, TextFieldProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState, } from 'react';




const Register = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [phone, setPhone] = useState('');

  const handleChange = (event: any) => {
    setPhone(event.target.value);
  };

  return (
    <Box sx={{ mx: 'auto', my: 0, maxWidth: 1200 }}>
      <Box sx={{ paddingBottom: 5, paddingTop: 15, gap: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <TextField required id="nome-register" label="Nome" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data de agendamento"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          // renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          type='tel'
          label="Telefone"
          value={phone}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          helperText="Formato: XXX-XXX-XXX"
          onBlur={(event) => {
            if (!event.target.value.match(/^\(\d{2}\) \d{5}-\d{4}$/)) {
              alert('Número de telefone inválido');
            }
          }}
          inputProps={{
            pattern: "\\(\\d{2}\\) \\d{5}-\\d{4}"
          }}


        />
        <TextField required id="rg-register" label="RG" variant="outlined" />
        <TextField required id="cpf-register" label="CPF" variant="outlined" />
        <TextField required id="idade-register" label="Idade" variant="outlined" />

        <TextField id="profissao-register" label="Profissão" variant="outlined" />
        <TextField id="estadocivil-register" label="Estado Civil" variant="outlined" />

      </Box>

      <Box>
        <TextField id="cep-register" label="CEP" variant="outlined" />
        <TextField id="endereco-register" label="Endereço" variant="outlined" />
        <TextField id="bairro-register" label="Bairro" variant="outlined" />
        <TextField id="cidade-register" label="Cidade" variant="outlined" />
        <TextField id="uf-register" label="UF" variant="outlined" />
      </Box>

    </Box >
  )
}

export default Register;