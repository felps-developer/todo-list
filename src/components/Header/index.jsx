import styled from "styled-components";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";

const HeaderContainer = styled.header``

const Header = () => {
    return (
        <>
            <HeaderContainer className="w-12 flex align-items-center gap-4 px-8 md:px-8 bg-primary">
                <h1>LOGO</h1>
                <IconField iconPosition="right" className="flex-1 md:flex-none md:w-4">
                    <InputIcon className="pi pi-search cursor-pointer" />
                    <InputText type="text" placeholder="Buscar tarefa..." className="w-full" />
                </IconField>
            </HeaderContainer>
        </>
    );
}

export default Header;