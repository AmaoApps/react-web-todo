import React from "react"
import uuid from "react-uuid"

export class Payment {

    constructor({
        id: string = uuid(), 
        typeRegister: string = '',
        typeMoney: string = '',
        description: string = '',
        mount: string = 0
    } = {}) {
        this.id = id,
        this.typeRegister = typeRegister
        this.typeMoney = typeMoney, 
        this.description = description,
        this.mount = mount
    }

};