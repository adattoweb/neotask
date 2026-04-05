"use client"

import Dropdown from "@/UI/Dropdown/Dropdown"
import styles from "../AddForm.module.css"
import { ChevronIcon } from "@/UI/Icons/Icons"
import { Controller, useFormContext } from "react-hook-form"

export function ProjectDropdown() {
   const { control } = useFormContext()
   return (
      <Controller
         name="project"
         control={control}
         defaultValue={undefined}
         render={({ field }) => (
            <Dropdown value={field.value} onChange={field.onChange}>
               <Dropdown.Button className={styles.project} needToRotating={true}>
                  <p className={styles.project__name}>Проєкт</p>
                  <ChevronIcon className={styles.chevron} />
               </Dropdown.Button>
               <Dropdown.Content className={styles.content}>
                  <Dropdown.Item value="name1">name1</Dropdown.Item>
                  <Dropdown.Item value="name2">name2</Dropdown.Item>
                  <Dropdown.Item value="name3">name3</Dropdown.Item>
                  <Dropdown.Item value="name4">name4</Dropdown.Item>
               </Dropdown.Content>
            </Dropdown>
         )}
      ></Controller>
   )
}
