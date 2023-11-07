import Box from "@src/app/theme/components/Box/Box";
import Icon from "@src/app/theme/components/Icon/Icon";
import Image from "@src/app/theme/components/Image/Image";
import Link from "@src/app/theme/components/Link/Link";
import Text from "@src/app/theme/components/Text/Text";
import { useTheme } from "@src/app/theme/ThemeProvider";
import Logo from '../../../../../../public/assets/logo_buffet.svg';
import DownFooter from "./DownFooter";
import React from "react";
import useResponsive from "@src/app/theme/helpers/useResponsive";
import useSize from "@src/app/theme/helpers/useSize";
import CSS from "./style.module.css";

export default function Footer(){

  const theme = useTheme()
  const isMobile = useResponsive();
  const size = useSize()
  return(
    <React.Fragment>
      <Box tag="footer"
        styleSheet={{
          display: 'flex',
          flexDirection: !(size < 325) ? `${isMobile ? 'column' : 'row'}` : 'column',
          flexWrap: !isMobile ? '' : 'wrap',
          height: 'auto',
          width: '100%',
          backgroundColor: theme.colors.neutral.x050,
          color: theme.colors.neutral.x000,
          padding: !(size < 1000) ? `3.5rem` : '1rem 0.5rem',
          textAlign: !isMobile ? 'left' : 'center',
          justifyContent: 'space-between',
          marginTop: '4rem'
        }}
        className={!isMobile ? ((size < 1000) ? CSS.boxFooter : '') : ''}
      >  
        <Box styleSheet={{width: !isMobile ? '' : '100%', margin: !isMobile ? '' : '0px auto'}}>
        <Image src={Logo.src}  alt="Logo-Buffet" styleSheet={{height: !(size < 1000) ? '113px' : '58px', width: !(size < 1000) ? '210px' : '150px', objectFit: 'cover', margin: !isMobile ? '' : '10px auto 10px', transform: !isMobile ? '' : 'scale(0.8)'}}/>
        </Box>
        
        {/* Institucional */}
        <Box tag="ul" styleSheet={{display: 'flex', flexDirection: 'column', gap: !isMobile ? '1rem' : '2px', marginBottom: !isMobile ? '' : '20px'}}>
          <Box tag="li">
            <Text variant={!isMobile ? "heading4semiBold" : 'heading6semiBold'} styleSheet={{fontSize: !(size < 1000) ? '1.5rem' : '1.1rem'}}>Institucional</Text>
          </Box>
          <Box tag="li">
            <Link href="/sobre-nos" variant="body2">Sobre nós</Link>
          </Box>
          <Box tag="li">
            <Link href='/assets/Termos_de_Uso_Busca_Buffet.pdf' variant="body2" target="_blank">Termos de uso</Link>
          </Box>
          <Box tag="li">
            <Link href="/assets/Politica_de_Privacidade_Busca_Buffet.pdf" variant="body2" target="_blank">Política de privacidade</Link>
          </Box>
        </Box>

        
        {/* Descubra */}
        <Box tag="ul" styleSheet={{display: 'flex', flexDirection: 'column', gap: !isMobile ? '1rem' : '2px', marginBottom: !isMobile ? '' : '20px'}}>
          <Box tag="li">
            <Text variant={!isMobile ? "heading4semiBold" : 'heading6semiBold'} styleSheet={{fontSize: !(size < 1000) ? '1.5rem' : '1.1rem'}}>Descubra</Text>
          </Box>
          <Box tag="li">
            <Link href="/#como-funciona" variant="body2">Como funciona</Link>
          </Box>
          <Box tag="li">
            <Link href="/termos-de-uso" variant="body2">Anuncie seu buffet</Link>
          </Box>
          <Box tag="li">
            <Link href="/termos-de-uso" variant="body2">Contrate agora</Link>
          </Box>
        </Box>

        {/*Categorias*/}
        <Box tag="ul" styleSheet={{display: 'flex', flexDirection: 'column', gap: !isMobile ? '1rem' : '2px', marginBottom: !isMobile ? '' : '20px'}}>
          <Box tag="li">
            <Text variant={!isMobile ? "heading4semiBold" : 'heading6semiBold'} styleSheet={{fontSize: !(size < 1000) ? '1.5rem' : '1.1rem'}}>Categorias</Text>
          </Box>
          <Box tag="li">
            <Link href="/sobre-nos" variant="body2">Lúdico</Link>
          </Box>
          <Box tag="li">
            <Link href="/termos-de-uso" variant="body2">Eletrônico</Link>
          </Box>
          <Box tag="li">
            <Link href="/politica-de-privacidade" variant="body2">Circo</Link>
          </Box>
        </Box>


        <Box tag="ul" styleSheet={{display: 'flex', flexDirection: 'column', gap: !isMobile ? '1rem' : '2px', marginBottom: !isMobile ? '' : '20px'}}>
        <Box tag="li">
            <Text variant={!isMobile ? "heading4semiBold" : 'heading6semiBold'} styleSheet={{fontSize: !(size < 1000) ? '1.5rem' : '1.1rem'}}>Conheça</Text>
          </Box>
          <Box tag="li">
            <Link href="/sobre-nos" variant="body2">Cinema</Link>
          </Box>
          {!isMobile ? <Box tag="li">
            <Link href="/termos-de-uso" variant="body2">Espaço para brincar</Link>
          </Box> : ''}
          <Box tag="li">
            <Link href="/politica-de-privacidade" variant="body2">Teatro</Link>
          </Box>
          <Box tag="li">
            <Link href="/politica-de-privacidade" variant="body2">Temático</Link>
          </Box>
        </Box>

        {/*Contato*/}
        <Box tag="ul" styleSheet={{display: 'flex', flexDirection: 'column', gap: !isMobile ? '1rem' : '2px', marginBottom: !isMobile ? '' : '20px'}}>
          <Box tag="li">
            <Text variant={!isMobile ? "heading4semiBold" : 'heading6semiBold'} tag="h4" color={theme.colors.primary.x500} styleSheet={{fontSize: !(size < 1000) ? '1.5rem' : (!isMobile ? '0.8rem' : '1.1rem')}}>Contatos</Text>
          </Box>
          <Box tag="li">
          <Box styleSheet={{display: 'flex', flexDirection: !isMobile ? 'row' : 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="facebook"/>
              <Link href="/" variant="body2">@buscaBuffet</Link>
            </Box>
          </Box>
          <Box tag="li">
          <Box styleSheet={{display: 'flex', flexDirection: !isMobile ? 'row' : 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="instagram" fill={theme.colors.primary.x500}/>
              <Link href="/" variant="body2">@buscaBuffet</Link>
            </Box>
          </Box>
        </Box>
      </Box>  
      <DownFooter/>
    </React.Fragment>
  )
}
