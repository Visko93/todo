import * as React from 'react'
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { styles } from './styles'
import { theme } from '../../styles/theme'
import { Input } from '../../components/Input'

interface TaskProps {
  id: string
  description: string
  isComplete: boolean
}

export function Home() {
  const [task, setTask] = React.useState('')
  const [tasks, setTasks] = React.useState<TaskProps[]>([])
  const completedTasks = tasks.filter((task) => task.isComplete).length
  const numberOfTasks = tasks.length

  const handleAddTask = () => {
    if (!task) return

    const newTask = {
      id: String(new Date().getTime()),
      description: task,
      isComplete: false,
    }
    setTasks([...tasks, newTask])
    setTask('')
  }
  const handleRemoveTask = (id: string) => {
    if (!id) return
    return Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            const newTasks = tasks.filter((task) => task.id !== id)
            setTasks(newTasks)
          },
        },
      ],
    )
  }
  const handleToggleTask = (id: string) => {
    if (!id) return
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        }
      }
      return task
    })
    setTasks(newTasks)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image
            source={require('../../assets/icons/rocket.png')}
            style={styles.logoImage}
          />
          <Text style={styles.first}>to</Text>
          <Text style={styles.second}>do</Text>
        </View>
      </View>
      <View style={styles.inputBox}>
        <Input
          value={task}
          onChangeText={setTask}
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors['gray-300']}
        />
        <TouchableOpacity
          onPress={handleAddTask}
          style={styles.button}
          activeOpacity={0.9}
        >
          <Ionicons name="add-circle-outline" size={16} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.status}>
          <View style={styles.statusItem}>
            <Text
              style={[
                styles.statusText,
                {
                  color: theme.colors.blue,
                },
              ]}
            >
              Criadas
            </Text>
            <Text style={styles.badge}>{numberOfTasks}</Text>
          </View>
          <View style={styles.statusItem}>
            <Text
              style={[
                styles.statusText,
                {
                  color: theme.colors.purple,
                },
              ]}
            >
              Concluidas
            </Text>
            <Text style={styles.badge}>{completedTasks || 0}</Text>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.task}>
              <TouchableOpacity
                style={styles.taskCheck}
                onPress={() => handleToggleTask(item.id)}
              >
                {item.isComplete ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={theme.colors.purple}
                  />
                ) : (
                  <Ionicons
                    name="ellipse-outline"
                    size={24}
                    color={theme.colors['gray-300']}
                  />
                )}
              </TouchableOpacity>
              <Text
                style={[
                  styles.taskText,
                  item.isComplete && {
                    textDecorationLine: 'line-through',
                    color: theme.colors['gray-300'],
                  },
                ]}
              >
                {item.description}
              </Text>
              <TouchableOpacity
                style={styles.taskRemove}
                onPress={() => handleRemoveTask(item.id)}
              >
                <Ionicons
                  name="trash-outline"
                  size={24}
                  color={theme.colors['gray-300']}
                />
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <View style={styles.line} />

              <Image source={require('../../assets/icons/Clipboard.png')} />
              <Text style={styles.emptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
