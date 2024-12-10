import { ActivityIndicator } from "react-native";

import {styles} from "./styles";
import {colors} from "@/src/styles/theme";

export function Loading () {
    return <ActivityIndicator color={colors.green.base} style={styles.container} />
}