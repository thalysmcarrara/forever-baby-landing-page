import style from './style.module.scss';

export default function FooterInfo() {
  return (
    <section className={style.footerInfo}>
      <div className={style.textContainer}>
        <p>2022 www.foreverliss.com.br</p>
        <p>Todos os direitos reservados.</p>
        <br />
        <p>
          Proibida reprodução total ou parcial. IMPORTANTE! Os preços e estoque
          sujeitos a alterações e podem variar sem aviso prévio. Em caso de
          divergência no valor do produto, irá prevalecer sempre o valor do
          carrinho de compras. FOREVER COMPANY COSMETICOS LTDA /
          www.foreverliss.com.br / Rua José Bonifácio, N° 690 Lençóis Paulista -
          SP Cep: 18683-420 | CNPJ: 08.958.817/0001-89 | Inscrição Estadual:
          416.118.979.112
        </p>
      </div>
    </section>
  );
}
