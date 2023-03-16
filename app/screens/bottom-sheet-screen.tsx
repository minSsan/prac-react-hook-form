import React, { FC, useCallback, useMemo, useRef } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../navigators"
import { Screen, Text } from "../components"
import { color } from "../theme"
import BottomSheet from "@gorhom/bottom-sheet"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "tomato",
  },
})

// @ts-ignore
//* export default 쓰면 MST observer 가 감지 못 합니다. 쓰지 말 것. - bottom-sheet 랑은 상관없음
export const BottomSheetScreen: FC<
  StackScreenProps<NavigatorParamList, "bottom-sheet-screen">
> = observer(function BottomSheetScreen() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], [])

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index)
  }, [])

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="bottomSheet" />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </Screen>
  )
})
