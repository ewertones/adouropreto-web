import React from "react";
import styles from "./styles.module.css";
import WhatsappButton from "./WhatsappButton";

const BarbecuePage: React.FC = () => {
    return (
        <div className={styles.churrascoBackground}>
            <div className={styles.churrascoBody}>
                <div className={styles.container}>
                    {/* <div className={`${styles.imageContainer} ${styles.overlay}`}>
                    <img src="/churrasco.webp" alt="Churrasco" className={styles.image} />
                </div> */}
                    <h1 className={styles.title}>Churrascão - Juventude&nbsp;AMA</h1>
                    <div className={styles.info}>
                        <p>
                            <strong>Data:</strong> 26 de Maio
                        </p>
                        <p>
                            <strong>Horário:</strong> 12:00 em diante
                        </p>
                        <p>
                            <strong>Valores:</strong>
                            <ul className="mt-1">
                                <li>Churrasco completo: R$22,00</li>
                                <li>Churrasco puro: R$32,40</li>
                                <li>Tábua mista: R$27,00</li>
                            </ul>
                        </p>
                    </div>
                    <hr className={styles.horizontalLine} />
                    <div className={styles.additionalInfo}>
                        <p>Junte-se a nós e participe desse grande evento!</p>
                        <p>O que vai ter?</p>
                        <ul>
                            <li>Muita carne!</li>
                            <li>Música ao vivo</li>
                            <li>Brincadeiras</li>
                            <li>E muito mais!</li>
                        </ul>
                        <p className="mt-5">Não perca essa oportunidade e garanta já seu ingresso!</p>
                    </div>
                    <WhatsappButton />
                </div>
            </div>
        </div>
    );
};

export default BarbecuePage;
