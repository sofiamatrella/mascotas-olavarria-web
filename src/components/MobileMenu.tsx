"use client";

import { useContext, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure } from "@headlessui/react";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import styles from "../styles/MobileMenu.module.css";
import Link from "next/link";
import LoggedContext from "@/context/LoggedContext";
import Page from "@/models/Menu";

export default function MobileMenu({ pages }: { pages: Page[] }) {
  const [open, setOpen] = useState(false);

  const { isLoggedIn } = useContext(LoggedContext);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        <Bars3Icon aria-hidden="true" width="1.5rem" />
      </button>
      <Dialog as="div" open={open} onClose={setOpen}>
        <Dialog.Panel className={styles.container}>
          <div className={styles.button_container}>
            <button
              type="button"
              className={styles.button}
              onClick={() => setOpen(false)}
            >
              <XMarkIcon width="1.5rem" aria-hidden="true" />
            </button>
          </div>
          <div>
            <div>
              <div className={styles.dialog_items}>
                <a href="/" className={styles.link}>
                  Inicio
                </a>
                {pages.map((page) => (
                  <Disclosure
                    as="div"
                    className={styles.disclosure}
                    key={page.name}
                  >
                    {({ open }) => (
                      <>
                        <Disclosure.Button className={styles.disclosure_button}>
                          {page.name}
                          <ChevronDownIcon
                            width="1.25rem"
                            aria-hidden="true"
                            className={`${open ? styles.icon_open : ""} ${
                              styles.icon
                            }`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel>
                          {page.subpages.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className={styles.disclosure_items}
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
              <div className={styles.login_button_container}>
                {isLoggedIn ? (
                  <div className={styles.user_icon}>
                    <UserCircleIcon width="45px" color="#435021" />
                    <p className={styles.link}>Perfil</p>
                  </div>
                ) : (
                  <Link href="/login" className={styles.login_button}>
                    Iniciar sesión
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
