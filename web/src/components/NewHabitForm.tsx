import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const avaliableWeekDays = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
]

export function NewHabitForm(event: FormEvent) {
    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<number[]>([]);

    function createNewHabit() {
        event.preventDefault()

        if (!title || weekDays.length === 0) {
            return
        }
        
        api.post('habits'), {
            title,
            weekDays
        }
        
        alert('habito criado com sucesso')
        
        setTitle('');
        setWeekDays([])
    }

    function handleToggleWeekDay(weekDay: number) {
        if (weekDays.includes(weekDay)) {
            const newWeekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)

            setWeekDays(newWeekDaysWithRemovedOne)
        } else {
            const weekDaysWithAddedOne = [...weekDays, weekDay]

            setWeekDays(weekDaysWithAddedOne)
        }
    }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight">
            Qual seu comprometimento?
        </label>

        <input 
            type="text" 
            id="title" 
            placeholder="I.E: Exercícios, Dormir Bem, etc..."
            className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
            autoFocus
            value={title}
            onChange={event => setTitle(event.target.value)}
        />

        <label htmlFor="" className="font-semibold leading-tight mt-4">
            Qual a recorrência?
        </label>

        <div className="flex flex-col gap-2 mt-3">
            {avaliableWeekDays.map((weekDay, index) => {
                return (
                    <Checkbox.Root 
                        key={weekDay} 
                        className='flex items-center gap-3 group focus:outline-none'
                        checked={weekDays.includes(index)}
                        onCheckedChange={() => handleToggleWeekDay(index)}
                    >
                        <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background">
                            <Checkbox.Indicator>
                                <Check size={20} className='text-white'/>
                            </Checkbox.Indicator>
                        </div>

                        <span className='text-white leading-tight'>
                            {weekDay}
                        </span>
                    </Checkbox.Root>
                )
            })}
        </div>

        <button 
            type="submit" 
            className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <Check size={20} weight="bold"/>
            Confirmar
        </button>
    </form>
  )
}
