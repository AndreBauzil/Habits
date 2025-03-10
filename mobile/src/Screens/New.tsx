import { ScrollView, View, Text, TextInput } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

export function New() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
        <ScrollView showsVerticalScrollIndicator={false}>

          <BackButton />

          <Text className="mt-6 text-white font-extrabold text-3xl">
            Criar Hábito
          </Text>

          <Text className="mt-6 text-white font-semibold text-base">
            Qual seu comprometimento?
          </Text>

          <TextInput 
            className="h-12 pl-4 rounded-lg mt-3 bg-zinc-5800 text-white focus:border-2 focus:border-green-600" 
          />

          <Checkbox 
            title="Beber 2L"
            checked
          />

        </ScrollView>
    </View>
  )
}
