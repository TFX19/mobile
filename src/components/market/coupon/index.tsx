import {Text, View } from "react-native"
import { IconTicket } from "@tabler/icons-react-native"

import { styles } from "./styles"
import { colors } from "@/src/styles/theme"

type Props ={
    code: string
}

export function Coupon ({ code }: Props){

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Utilize esse cupom</Text>
            <View style={styles.content}>
                <IconTicket size={34} color={colors.green.light} />
                <Text style={styles.code}>{code}</Text>
            </View>
        </View>
    )
}