'use client'
import { useMask } from '@react-input/mask';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, RadioGroup,
  FormControlLabel, Radio, TextField
} from '@mui/material';

type RowData = {
  name: string;
};

const rows: RowData[] = [
  { name: 'Fez tratamento estético anterior?' },
  { name: 'Preenchimento facial anterior?' },
  { name: 'Antecedentes alérgicos?' },
  { name: 'Pratica atividade física?' },
  { name: 'É fumante?' },
  { name: 'É gestante?' },
  { name: 'Faz algum tratamento médico?' },
  { name: 'Alguma doença ativa?' },
  { name: 'Tratamento com Antibiótico?' },
  { name: 'Usa algum medicamento que interfira na transmissão neuromuscular?' },
  { name: 'Costuma tomar sol?' },
  { name: 'Usa protetor solar frequentemente?' },
  { name: 'Antecedentes oncológicos?' },
  { name: 'Cuidados diários e produtos em uso?' },
  { name: 'Quelóide?' },
  { name: 'Herpes?' },
  { name: 'Hipertensão?' },
  { name: 'Diabetes?' },
  { name: 'Problemas cardíacos?' },
  { name: 'Lúpus?' },
  { name: 'Problemas oculares:' },
  { name: 'Catarata?' },
  { name: 'Glaucoma?' },
  { name: 'Úlcera de córnea?' },
  { name: 'Lente de contato?' },
  { name: 'Cirurgias oculares?' },
  { name: 'Deslocamento de Retina?' },
];

const RegisterClientDetails = () => {
  const telInputMask = useMask({ mask: '(__)_____-____', replacement: '_' });
  const cpfInputMaks = useMask({ mask: '___.___.___-__', replacement: '_' });
  const cepInputMaks = useMask({ mask: '_____-___', replacement: '_' });

  return (
    <TableContainer sx={{ mx: 'auto', my: 0, maxWidth: 1200 }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Histórico</TableCell>
            <TableCell align="center">Resposta</TableCell>
            <TableCell align="center">Observações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">
                <RadioGroup row name={`resposta-${index}`}>
                  <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                  <FormControlLabel value="nao" control={<Radio />} label="Não" />
                </RadioGroup>
              </TableCell>
              <TableCell align="center">
                <TextField fullWidth size="small" variant="outlined" name={`observacao-${index}`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegisterClientDetails;
