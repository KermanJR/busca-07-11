import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "@src/app//theme/ThemeProvider";
import FormBox from "@src/app/theme/components/Form/Form";
import Select from "@src/app/theme/components/Select/Select";
import Button from "@src/app/theme/components/Button/Button";
import Input from "@src/app//theme/components/Input/Input";
import useResponsive from "@src/app/theme/helpers/useResponsive";
import useSize from "@src/app/theme/helpers/useSize";
import { UserContext } from "@src/app/context/UserContext";
import { useRouter } from "next/dist/client/router";
import BuffetService from "@src/app/api/BuffetService";
import arrowDown from "../../../../../../../../public/assets/icons/arrow_down.jpg"
export default function FormSearch(){

  const categories = [
    {
      value: '1',
      label: 'Infantil'
    },
    {
      value: '2',
      label: 'Domicílio'
    },
    {
      value: '3',
      label: 'Casamento'
    },
    {
      value: '4',
      label: 'Confraternização'
    },
    {
      value: '5',
      label: 'Outros'
    },

  ]

  const [categoria, setCategoria] = useState('');
  const [cidade, setCidade] = useState('');

  const [cities, setCities] = useState([]);

  const theme = useTheme();
  const isMobile = useResponsive();
  const size = useSize()
  const router = useRouter();

  const {
    setSelectedCategory,
    selectedCategory,
    setSelectedCity,
    selectedCity
  } = useContext(UserContext);


  function SelectFilters(){
    setSelectedCategory(categoria);
    setSelectedCity(cidade)
    router.push('/busca')
  }

  useEffect(() => {
    BuffetService.showBuffets()
      .then((res) => {
        let filteredBuffets = res.map((buffet) => buffet?.entidade?.enderecos[0]?.endereco?.cidade?.nome);
    
  
        filteredBuffets = filteredBuffets.filter((city, index, self) => {
          return self.indexOf(city) === index;
        });

        setCities(filteredBuffets);
      });
  }, []);
  

  return (
    <FormBox styleSheet={{
      minWidth: !isMobile ? '' : 'auto',
      width: !isMobile ? !(size < 1100) ? '920px' : '800px' : '80vw',
      maxWidth: !isMobile ? '' : '700px',
      display: 'flex',
      flexDirection: !isMobile ? 'row' : 'column',
      alignSelf: 'center',
      justifyContent: !isMobile ? 'space-between' : 'center',
      alignItems: !isMobile ? '' : 'center',
      gap: '100px',
      background: 'rgba(241, 241, 241, 0.50)',
      padding: '2rem',
      borderRadius: '20px',
    }}>
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={{
        width: '278px',
        borderRadius: '50px',
        padding: '.8rem',
        border: 'none',
        backgroundColor: theme.colors.neutral.x000, // Defina o fundo original para o select
        appearance: 'none', // Remover a aparência padrão do sistema
        backgroundImage: `URL(${arrowDown.src})`, // Substitua com o caminho da sua imagem da seta
        backgroundPosition: 'right 10px center', // Ajuste a posição da imagem da seta
        backgroundRepeat: 'no-repeat', // Não repita a imagem
        color: theme.colors.primary.x600,
        
        fontWeight: 500
      }}>
        <option value=""  style={{
          color: theme.colors.primary.x600,
          fontWeight: 500,
          textAlign: 'left',
        }}>Todas as categorias</option>
        {categories.map((item, index) => {
          return (
            <option key={index} value={item.label} style={{
              color: theme.colors.primary.x600,
              fontWeight: 500
            }}> {item.label}</option>
          );
        })}
      </select>
  
      <select value={cidade} onChange={(e) => setCidade(e.target.value)} style={{
        width: '278px',
        borderRadius: '50px',
        padding: '.8rem',
        border: 'none',
        backgroundColor: theme.colors.neutral.x000, // Defina o fundo original para o select
        appearance: 'none', // Remover a aparência padrão do sistema
        backgroundImage: `URL(${arrowDown.src})`, // Substitua com o caminho da sua imagem da seta
        backgroundPosition: 'right 10px center', // Ajuste a posição da imagem da seta
        backgroundRepeat: 'no-repeat', // Não repita a imagem
        color: theme.colors.primary.x600,
        fontWeight: 500
      }}>
        <option value="" style={{
          color: theme.colors.primary.x600,
          fontWeight: '500',
          textAlign: 'left'
        }}>Todos os locais</option>
        {
          cities.map((item, index) => {
            return <option key={index} value={item} style={{
              color: theme.colors.primary.x600,
              fontWeight: 500
            }}>{item}</option>
          })
        }
      </select>
      <Button size="lg" onClick={SelectFilters} fullWidth styleSheet={{
        width: !isMobile ? '178px' : '50%',
        marginLeft: !isMobile ? !(size < 1100) ? '5.5rem' : '1rem' : 'auto',
        marginRight: !isMobile ? '' : 'auto',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
      }}>
        Buscar
      </Button>
    </FormBox>
  );
  
}
