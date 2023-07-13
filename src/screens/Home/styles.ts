import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors['gray-600'],
  },
  header: {
    width: '100%',
    height: 173,
    backgroundColor: theme.colors['gray-700'],
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    marginEnd: 8,
  },
  first: {
    fontSize: 32,
    fontWeight: '800',
    color: theme.colors.blue,
  },
  second: {
    fontSize: 32,
    fontWeight: '800',
    color: theme.colors.purple,
  },
  content: {
    backgroundColor: theme.colors['gray-600'],
    height: '100%',

    paddingHorizontal: 16,
    elevation: 1,
  },
  inputBox: {
    marginEnd: 16,
    marginStart: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 6,

    marginTop: -24,
  },
  input: {
    borderRadius: 6,
    backgroundColor: theme.colors['gray-500'],
    borderColor: theme.colors['gray-500'],
    borderWidth: 1,

    height: 54,
    flex: 1,
    color: theme.colors['gray-100'],
    padding: 16,

    marginEnd: 4,
  },
  button: {
    backgroundColor: theme.colors.blueDark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 16,
    borderRadius: 6,

    height: 52,
    width: 52,
  },
  list: {
    flex: 1,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    paddingBottom: 8,
    height: 56,
  },
  statusItem: {
    flexDirection: 'row',
  },
  statusText: {
    marginEnd: 8,
    color: theme.colors['gray-200'],

    fontSize: 14,
    fontWeight: '700',
  },
  badge: {
    backgroundColor: theme.colors['gray-400'],
    borderRadius: 8,
    paddingHorizontal: 8,

    color: theme.colors['gray-200'],
    fontSize: 12,
  },
  line: {
    borderWidth: 0.5,
    borderColor: theme.colors['gray-500'],
    margin: 8,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,

    height: 64,

    backgroundColor: theme.colors['gray-500'],
    borderRadius: 8,
    borderColor: theme.colors['gray-400'],
    borderWidth: 1,

    shadowColor: theme.colors['gray-400'],
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,

    marginTop: 8,
  },
  taskCheck: {},
  taskText: {
    color: theme.colors['gray-100'],
    fontSize: 16,
    marginStart: 8,

    flex: 1,
    justifyContent: 'flex-start',
  },
  taskRemove: {
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 48,
  },
  emptyTitle: {
    color: theme.colors['gray-300'],
    fontSize: 14,
    fontWeight: 'bold',

    marginTop: 16,
  },
  emptyText: {
    color: theme.colors['gray-300'],
    fontSize: 12,
  },
})
