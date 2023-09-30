"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import styles from "../styles/FAQ.module.css";
import { useState } from "react";

export default function FAQ() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Preguntas frecuentes</h2>
      <div className={styles.disclosure_container}>
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className={styles.disclosure_button}>
                <span>
                  ¿Cómo puedo adoptar una mascota a través de Mascotas
                  Olavarría?
                </span>
                <ChevronUpIcon
                  className={`${open ? styles.icon_open : ""} ${styles.icon}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={styles.disclosure_panel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                magna massa, consectetur ac ante bibendum, sodales viverra
                turpis. Sed hendrerit ante vel lorem maximus, in pulvinar massa
                pulvinar. Sed viverra tortor vel commodo semper.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" style={{ marginTop: "0.5rem" }} defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className={styles.disclosure_button}>
                <span>¿Cuál es el proceso de adopción?</span>
                <ChevronUpIcon
                  className={`${open ? styles.icon_open : ""} ${styles.icon}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={styles.disclosure_panel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                magna massa, consectetur ac ante bibendum, sodales viverra
                turpis. Sed hendrerit ante vel lorem maximus, in pulvinar massa
                pulvinar. Sed viverra tortor vel commodo semper.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" style={{ marginTop: "0.5rem" }} defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className={styles.disclosure_button}>
                <span>
                  ¿Hay alguna tarifa o costo asociado con la adopción?
                </span>
                <ChevronUpIcon
                  className={`${open ? styles.icon_open : ""} ${styles.icon}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={styles.disclosure_panel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" style={{ marginTop: "0.5rem" }} defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className={styles.disclosure_button}>
                <span>
                  ¿Cómo puedo contribuir y ayudar a las protectoras de mascotas
                  registradas en la plataforma?
                </span>
                <ChevronUpIcon
                  className={`${open ? styles.icon_open : ""} ${styles.icon}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={styles.disclosure_panel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                magna massa, consectetur ac ante bibendum, sodales viverra
                turpis. Sed hendrerit ante vel lorem maximus, in pulvinar massa
                pulvinar. Sed viverra tortor vel commodo semper.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" style={{ marginTop: "0.5rem" }} defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className={styles.disclosure_button}>
                <span>
                  ¿Cómo puedo contactar al equipo de Mascotas Olavarría si tengo
                  más preguntas o problemas técnicos?
                </span>
                <ChevronUpIcon
                  className={`${open ? styles.icon_open : ""} ${styles.icon}`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={styles.disclosure_panel}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                magna massa, consectetur ac ante bibendum, sodales viverra
                turpis.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
