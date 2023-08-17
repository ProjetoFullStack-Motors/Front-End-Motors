import Button from "../../Buttons";
import Input from "../../Inputs/ Input";
import InputPass from "../../Inputs/InputsPass";
import StyledDiv from "./style";


const FormRegister = () => {
  return (
    <>
      <StyledDiv>
        <h2>Cadastro</h2>
        <p>Informações pessoais</p>
        <form>
          <Input 
            id="name" 
            label="Nome"
            type="text"
            placeholder="Digite seu nome..."
          />
          <Input 
            id="email" 
            label="Email"
            type="email"
            placeholder="Digite seu e-mail..."
          />
          <Input 
            id="cpf" 
            label="CPF"
            type="number"
            placeholder="000.000.000-00"
          />
          <Input 
            id="celphone" 
            label="Celular"
            type="tel"
            placeholder="(DDD) 90000-0000"
          />
          <Input 
            id="birthdate" 
            label="Data de Nascimento"
            type="date"
            placeholder="00/00/00"
          />
          <Input 
            id="description" 
            label="Descrição"
            type="text"
            placeholder="Digite descrição..."
          />
          
          <p>Informações de endereço</p>

          <Input 
            id="cep" 
            label="CEP"
            type="number"
            placeholder="00000.000"
          />

          <Input 
            id="state" 
            label="Estado"
            type="text"
            placeholder="Digitar Estado"
          />

          <Input 
            id="city" 
            label="Cidade"
            type="text"
            placeholder="Digitar Cidade"
          />

          <Input 
            id="street" 
            label="Rua"
            placeholder="Endereço..."
          />

          <div className="address">
            <Input 
              id="addressNumber" 
              label="Número"
              placeholder="Digitar número"
            />

            <Input 
              id="addressComplement" 
              label="Complemento"
              type="text"
              placeholder="Ex: apart 307"
            />
          </div>

          <p>Tipo de conta</p>

          <div className="btnRole">
            <Button 
              $background="brand-2"
              $width={4}
            >
              Comprador
            </Button>
            <Button 
              $background="grey-8"
              $width={4}
              $border
              $color="grey-0"
            >
              Anunciante
            </Button>
          </div>

          <InputPass
            className="inputPass" 
            id="password" 
            label="Senha"
            placeholder="Digite sua senha..."
          />

          <InputPass 
            id="confirmPass" 
            label="Confirmar Senha" 
            placeholder="Confirme sua senha..."
          />

          <Button 
            $background="brand-2"
            $width={6}
          >
            Finalizar cadastro
          </Button>
        </form>
      </StyledDiv>
    </>
  );
};

export default FormRegister;