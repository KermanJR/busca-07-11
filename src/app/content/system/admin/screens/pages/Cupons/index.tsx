
import { dataTable } from "@src/app/components/system/Mockup";
import TableCell from "@src/app/components/system/Table/TableCell";
import TableHead from "@src/app/components/system/Table/TableHead";
import TableRow from "@src/app/components/system/Table/TableRow";
import TableBody from "@src/app/components/system/Table/TableBody";
import { useTheme } from "@src/app/theme/ThemeProvider"
import Box from "@src/app/theme/components/Box/Box"
import Text from "@src/app/theme/components/Text/Text";
import Button from "@src/app/theme/components/Button/Button";
import { useContext, useEffect, useState } from "react";
import ModalDashboardCreateCupons from "./Modals/CreateCupons";
import ModalDashboardEditCupons from "./Modals/EditCupons";
import BuffetService from "@src/app/api/BuffetService";
import { FilterArrows } from "../common/FilterArrows";
import { useFilterFunctions } from "../common/useFilterFunctions";
import { UserContext } from "@src/app/context/UserContext";

const Cupons = () =>{

  const theme = useTheme();
  const [isModalOpenEditCupom, setIsModalOpenEditCupom] = useState(false);
  const [isModalOpenNewCupom, setIsModalOpenNewCupom] = useState(false);
  const [cupons, setCupons] = useState<any>([]);
  const [index, setIndex] = useState(0)
  const [id, setId] = useState(0)
  const {
    orderByGrowing,
    orderByDescending,
    orderByDateGrowing,
    orderByDateDescending
  } = useFilterFunctions({hook: cupons, setHook: setCupons})

  const {
    setDataCupons,
  } = useContext(UserContext)

  useEffect(()=>{
    BuffetService.showCupoms()
    .then(res=>{
      setCupons(res)
      setDataCupons(res)
    })
  },[])


  return(
    <Box styleSheet={{height: 'auto'}}>

      <Box 
        styleSheet={{
        width: '100%',
        height: 'auto',
        marginTop: '1rem',
        padding: '2rem',
        borderRadius: '8px',
        display: 'flex',
        backgroundColor: theme.colors.neutral.x000,
        boxShadow: `0px 12px 23px 0px ${theme.colors.neutral.x100}`,
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '.4rem',
      }}>

      {isModalOpenEditCupom &&(
        <ModalDashboardEditCupons isModalOpenEditCupom={isModalOpenEditCupom} setIsModalOpenEditCupom={setIsModalOpenEditCupom} cupons={cupons} setCupons={setCupons} index={index} id={id}/>
        )
      }

      {isModalOpenNewCupom &&(
        <ModalDashboardCreateCupons isModalOpenCreateCupom={isModalOpenNewCupom} setIsModalOpenCreateCupom={setIsModalOpenNewCupom} cupons={cupons} setCupons={setCupons}/>
      )}


        <Box tag="table">
          <TableHead>
            <TableRow styleSheet={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <TableCell><p>Código</p></TableCell>
              <TableCell><p>Valor do plano</p> <FilterArrows functionupArrow={orderByGrowing} functionDownArrow={orderByDescending} property="valor"/></TableCell>
              <TableCell><p>Desconto (%)</p> <FilterArrows functionupArrow={orderByGrowing} functionDownArrow={orderByDescending} property="porcentagem"/></TableCell>
              <TableCell><p>Descrição</p></TableCell>
              <TableCell><p>Data Início</p> <FilterArrows functionupArrow={orderByDateGrowing} functionDownArrow={orderByDateDescending} property="data_inicio"/></TableCell>
              <TableCell><p>Data Fim</p> <FilterArrows functionupArrow={orderByDateGrowing} functionDownArrow={orderByDateDescending} property="data_fim"/></TableCell>
              <TableCell><p>Ações</p></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cupons.map((item, index)=>(
              <TableRow key={index} styleSheet={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TableCell>{item?.['codigo']}</TableCell>
                <TableCell>{`R$ ${item?.['valor']}`}</TableCell>
                <TableCell>{`${item?.['porcentagem']} %`}</TableCell>
                <TableCell>{item?.['descricao']}</TableCell>
                <TableCell>{item?.['data_inicio'].substring(0, 10).split('-').reverse().join('/')}</TableCell>
                <TableCell>{item?.['data_fim'].substring(0, 10).split('-').reverse().join('/')}</TableCell>
                <Box onClick={(e)=>{setIndex(index), setId(item?.['id']), setIsModalOpenEditCupom(!isModalOpenEditCupom)}} styleSheet={{cursor: 'pointer', textAlign: 'center'}}>
                  <Text variant="heading5semiBold">...</Text>
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Box>
          <Button styleSheet={{alignSelf: 'flex-start', width: '132px'}} fullWidth colorVariant="primary" onClick={() => setIsModalOpenNewCupom(true)}>Novo cupom</Button>
      </Box>
    </Box>
  )
}

export default Cupons;
