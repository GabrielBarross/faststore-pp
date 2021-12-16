import React, { useState } from 'react'
import { Form, Label, Input, Button, Checkbox } from '@faststore/ui'

const NewsletterForm = () => {
  const [newsEmail, setNewsEmail] = useState<string>('')
  const [newsAccept, setNewsAccept] = useState<boolean>(false)

  function handleInput(e: any) {
    e.preventDefault()
    setNewsEmail(e.target.value)
  }

  function handleCheckbox(e: any) {
    e.preventDefault()
    if (newsAccept === false) {
      return setNewsAccept(true)
    }

    return setNewsAccept(false)
  }

  function handleSubmit(e: any) {
    e.preventDefault()
  }

  return (
    <section className="newsletter-section">
      <Form>
        <h4 className="newsletter-title">Cadastre-se na nossa Newsletter</h4>
        <Label>Preencha seu E-mail</Label>
        <Input placeholder="Input" onChange={(e) => handleInput(e)} />
        <Checkbox checked={newsAccept} onClick={(e) => handleCheckbox(e)} />
        <Button onClick={(e) => handleSubmit(e)}> Enviar </Button>
      </Form>
    </section>
  )
}

export default NewsletterForm
