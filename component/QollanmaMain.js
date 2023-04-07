import React from 'react'
import { useRouter } from "next/router";
import styles from '../styles/QollanmaMain.module.css'
import Link from 'next/link'

const QollanmaMain = ({ data }) => {    

    const { locale } = useRouter()

    return (
        <div className={styles.qollanmaMain}>
            {
                locale === "uz-UZ" ?
                    <h3>Qo`llanma\Instruksia</h3>
                    : locale === "ru-RU" ?
                        <h3>Руководство\Инструкция</h3>
                        : <h3>Guide\Instruction</h3>
            }
            <div className={styles.gradientOne}></div>
            <div className={styles.gradientTwo}></div>
            <div className={styles.gradientThree}></div>
            <div className={styles.gradientFour}></div>
            <div className={styles.gradientFive}></div>

            <div>
                {
                    data
                        .filter(p => p.languages_code === locale)
                        .map(({ id, guideline_title, guidelines_id, guidline_video, gudline_created_date, guideline_content }) => (
                            <div key={id} className={styles.qollanmaCard}>
                                {
                                    <div className={styles.qollanmaCardMobileHeader}>
                                        <video
                                            poster='/video-poster.jpg'
                                            src={`https://admin.uzbekvoice.ai/assets/${guidline_video}`}
                                            controls
                                            muted
                                            loop
                                        // autoPlay
                                        ></video>
                                    </div>
                                }

                                <div className={styles.qollanmaCardBody}>
                                    <span>{gudline_created_date.slice(0, 10)}</span>
                                    <h4>{guideline_title}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: guideline_content.split(" ", 40).join(' ') }}></p>

                                    <Link href={`/guide/${guidelines_id}`}>
                                        <a>
                                            {
                                                locale === "uz-UZ" ?
                                                    'Batafsil'
                                                    : locale === "ru-RU" ?
                                                        'Узнать больше'
                                                        : 'Read more'
                                            }
                                            <img src='/chevron-right.svg' />
                                        </a>
                                    </Link>
                                </div>
                                {
                                    <div className={styles.qollanmaCardHeader}>
                                        <video
                                            poster='/video-poster.jpg'
                                            src={`https://admin.uzbekvoice.ai/assets/${guidline_video}`}
                                            controls
                                            muted
                                            loop
                                        // autoPlay
                                        ></video>
                                    </div>
                                }
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default QollanmaMain